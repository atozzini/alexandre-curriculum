import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import './ContactModal.css';

const API_URL =
  'https://5612g2228f.execute-api.us-east-1.amazonaws.com/contact';
const RECAPTCHA_SITE_KEY = '6Lff3o8sAAAAANXY73WRAAVuoO1ubMVunvEGSBJe';

function loadRecaptcha() {
  return new Promise(resolve => {
    if (document.getElementById('recaptcha-script')) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.id = 'recaptcha-script';
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
}

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  status: 'idle',
  errorMessage: '',
};

class ContactModal extends Component {
  state = initialState;

  handleChange = field => event => {
    this.setState({ [field]: event.target.value });
  };

  handleClose = () => {
    const { onClose } = this.props;
    this.setState(initialState);
    onClose();
  };

  handleSubmit = async () => {
    const { name, email, message, phone } = this.state;

    if (!name || !email || !message) {
      this.setState({
        status: 'error',
        errorMessage: this.props.intl.formatMessage({
          id: 'ContactModal.missingFields',
          defaultMessage: 'Please fill in name, email and message.',
        }),
      });
      return;
    }

    this.setState({ status: 'loading', errorMessage: '' });

    try {
      await loadRecaptcha();
      const recaptchaToken = await new Promise((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(RECAPTCHA_SITE_KEY, { action: 'contact' })
            .then(resolve)
            .catch(reject);
        });
      });

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message, recaptchaToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            this.props.intl.formatMessage({
              id: 'ContactModal.genericError',
              defaultMessage: 'Something went wrong. Please try again.',
            }),
        );
      }

      this.setState({ status: 'success' });
    } catch (err) {
      this.setState({ status: 'error', errorMessage: err.message });
    }
  };

  render() {
    const { open } = this.props;
    const { name, email, phone, message, status, errorMessage } = this.state;
    const isLoading = status === 'loading';
    const isSuccess = status === 'success';

    return (
      <Dialog
        open={open}
        onClose={this.handleClose}
        fullWidth
        maxWidth="sm"
        className="ContactModal"
      >
        <DialogTitle disableTypography className="ContactModal-title">
          <h3>
            <FormattedMessage
              id="ContactModal.title"
              defaultMessage="Send me a message"
            />
          </h3>
          <IconButton onClick={this.handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          {isSuccess ? (
            <div className="ContactModal-feedback">
              <CheckCircleIcon className="ContactModal-successIcon" />
              <p>
                <FormattedMessage
                  id="ContactModal.successMessage"
                  defaultMessage="Message sent! I'll get back to you soon."
                />
              </p>
            </div>
          ) : (
            <div className="ContactModal-form">
              <TextField
                label={
                  <FormattedMessage
                    id="ContactModal.name"
                    defaultMessage="Name"
                  />
                }
                value={name}
                onChange={this.handleChange('name')}
                disabled={isLoading}
                fullWidth
                margin="normal"
              />
              <TextField
                label={
                  <FormattedMessage
                    id="ContactModal.email"
                    defaultMessage="Email"
                  />
                }
                type="email"
                value={email}
                onChange={this.handleChange('email')}
                disabled={isLoading}
                fullWidth
                margin="normal"
              />
              <TextField
                label={
                  <FormattedMessage
                    id="ContactModal.phone"
                    defaultMessage="Phone (optional)"
                  />
                }
                value={phone}
                onChange={this.handleChange('phone')}
                disabled={isLoading}
                fullWidth
                margin="normal"
              />
              <TextField
                label={
                  <FormattedMessage
                    id="ContactModal.message"
                    defaultMessage="Message"
                  />
                }
                value={message}
                onChange={this.handleChange('message')}
                disabled={isLoading}
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />

              {status === 'error' && (
                <p className="ContactModal-error">
                  <ErrorIcon fontSize="small" />
                  {errorMessage}
                </p>
              )}

              <p className="ContactModal-recaptchaNotice">
                <FormattedMessage
                  id="ContactModal.recaptchaNotice"
                  defaultMessage="This site is protected by reCAPTCHA."
                />
              </p>
            </div>
          )}
        </DialogContent>

        {!isSuccess && (
          <DialogActions>
            <Button onClick={this.handleClose} disabled={isLoading}>
              <FormattedMessage
                id="ContactModal.cancel"
                defaultMessage="Cancel"
              />
            </Button>
            <Button
              onClick={this.handleSubmit}
              color="secondary"
              variant="contained"
              disabled={isLoading}
            >
              {isLoading && (
                <CircularProgress size={18} className="ContactModal-spinner" />
              )}
              <FormattedMessage id="ContactModal.send" defaultMessage="Send" />
            </Button>
          </DialogActions>
        )}
      </Dialog>
    );
  }
}

ContactModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(ContactModal);

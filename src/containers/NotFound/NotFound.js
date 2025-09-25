import React from 'react';
import Head from 'next/head';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import monokai from 'react-syntax-highlighter/dist/esm/styles/hljs/monokai';

import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';

const testCode = `
class HttpException extends \\RuntimeException implements HttpExceptionInterface {
  public function __construct(int $statusCode, string $message = null, \\Exception $previous = null) {
      $this->statusCode = $statusCode;
      parent::__construct($message, $code, $previous);
  }
  public function getStatusCode() {
      return $this->statusCode;
  }
}
throw new HttpException(400, 'Page Not Found');`;

const testCodeSmallScreen = `
class HttpException extends \\RuntimeException implements HttpExceptionInterface {
  public function __construct(int $statusCode, string $message = null, \\Exception $previous = null) {
      $this->statusCode = $statusCode;
      parent::__construct($message, $code, $previous);
  }
  public function getStatusCode() {
      return $this->statusCode;
  }
}
throw new HttpException(400, 'Page Not Found');`;

export const NotFound = ({ intl: { formatMessage } }) => (
  <div className="NotFound">
    <Head>
      <title>
        {formatMessage({
          id: 'NotFound.title',
          defaultMessage: '404 - page not found',
        })}
      </title>
    </Head>

    <ScreenBlock
      containerClassName="NotFoundBlockContainer screen-sm"
      className="NotFoundBlock"
    >
      <SyntaxHighlighter language="php" style={monokai}>
        {testCodeSmallScreen}
      </SyntaxHighlighter>
    </ScreenBlock>

    <ScreenBlock
      containerClassName="NotFoundBlockContainer screen-xl"
      className="NotFoundBlock"
    >
      <SyntaxHighlighter language="php" style={monokai}>
        {testCode}
      </SyntaxHighlighter>
    </ScreenBlock>
  </div>
);

NotFound.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(NotFound);

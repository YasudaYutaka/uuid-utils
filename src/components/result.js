import React from "react";
import { UilCopy } from '@iconscout/react-unicons'

/**
 * A reusable component that displays a result text and an icon to copy the text to the clipboard.
 * Takes a resultText prop that contains the text to display.
 */
function Result({ resultText }) {

    const copyToClipboard = () => {
        navigator.clipboard.writeText(resultText)
    }

    return (
      <div class="d-flex flex-row">
          <p class="px-3">{resultText}</p>
          {resultText.length > 0 && 
              <div data-toggle="tooltip" data-placement="top" title="Copy">
                <UilCopy class="result__icon" onClick={copyToClipboard} size="40" color="#61DAFB" />
              </div>
          }
      </div>
    );
}

export default Result;
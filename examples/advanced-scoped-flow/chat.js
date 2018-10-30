// @flow
import React, { Component } from 'react';
import { YieldScope } from 'react-adone';

import formBasket, { FormYield } from './baskets/form';
import { MessagesYield } from './baskets/messages';
import themeBasket, { ThemeYield } from './baskets/theme';

export default class Chat extends Component<{ id: string }> {
  render() {
    return (
      <YieldScope id={this.props.id} for={themeBasket}>
        <ThemeYield>
          {({ color, change }) => (
            <div style={{ background: color }}>
              <h2>Chat</h2>
              <button onClick={() => change('#DFF')}>Theme 1</button>
              <button onClick={() => change('#FDF')}>Theme 2</button>
              <button onClick={() => change('#FFD')}>Theme 3</button>
              <MessagesYield>
                {({ data, add }) => (
                  <div>
                    <ul>
                      {data.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                    <YieldScope local for={formBasket}>
                      <FormYield>
                        {({ isValid, message, isSending, input, send }) => (
                          <form
                            action="#"
                            onSubmit={() =>
                              send(message).then(() => add(message))
                            }
                          >
                            <textarea
                              value={message}
                              disabled={isSending}
                              onChange={ev => input(ev.target.value)}
                            />
                            <button disabled={!isValid || isSending}>
                              {isSending ? '...' : 'Send'}
                            </button>
                          </form>
                        )}
                      </FormYield>
                    </YieldScope>
                  </div>
                )}
              </MessagesYield>
            </div>
          )}
        </ThemeYield>
      </YieldScope>
    );
  }
}

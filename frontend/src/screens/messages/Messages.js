import React from "react";
import formatMessage from "format-message";
import { HeaderUser } from "../../components/HeaderUser.js";
import { Button } from "../../components/button/Button";
import "./messages.css";

function Messages() {
  return (
    <React.Fragment>
      <HeaderUser />

      <section class="main-page-grid">
        <section class="users">
          <h1>{formatMessage("Mensajes")}</h1>
          <ul>
            <li>
              <span>{formatMessage("Ana Corral")}</span>
            </li>
          </ul>
        </section>

        <section class="messages">
          <h1>{formatMessage("Ana Corral")}</h1>

          <section class="chat">
            <section id="main-messages">
              <ul>
                <li id="bubble-received">
                  <span id="user-meta">
                    {formatMessage("Nombre usuario · Hace 1 día")}
                  </span>
                  <section id="message-received">
                    <span class="chat-message">
                      {formatMessage(
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi maiores temporibus dicta blanditiis quibusdam architecto libero obcaecati eaque labore minus esse earum atque fugit, exercitationem quas qui iusto. Debitis, numquam."
                      )}
                    </span>
                  </section>
                </li>

                <li id="bubble-sent">
                  <span id="user-meta">{formatMessage("Yo · Hace 1 día")}</span>
                  <section id="message-sent">
                    <span class="chat-message">
                      {formatMessage("Lorem ipsum dolor sit amet.")}
                    </span>
                  </section>
                </li>

                <li id="bubble-received">
                  <span id="user-meta">
                    {formatMessage("Nombre usuario · Hace 1 día")}
                  </span>
                  <section id="message-received">
                    <span class="chat-message">
                      {formatMessage(
                        "Excepturi maiores temporibus dicta blanditiis quibusdam architecto libero obcaecati eaque labore minus esse earum atque fugit, exercitationem quas qui iusto. Debitis, numquam."
                      )}
                    </span>
                  </section>
                </li>

                <li id="bubble-sent">
                  <span id="user-meta">{formatMessage("Yo · Hace 1 día")}</span>
                  <section id="message-sent">
                    <span class="chat-message">
                      {formatMessage(
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi maiores temporibus dicta blanditiis quibusdam architecto libero obcaecati eaque labore minus esse earum atque fugit, exercitationem quas qui iusto. Debitis, numquam."
                      )}
                    </span>
                  </section>
                </li>

                <li id="bubble-received">
                  <span id="user-meta">
                    {formatMessage("Nombre usuario · Hace 1 día")}
                  </span>
                  <section id="message-received">
                    <span class="chat-message">
                      {formatMessage(
                        "Excepturi maiores temporibus dicta blanditiis quibusdam architecto libero obcaecati eaque labore minus esse earum atque fugit, exercitationem quas qui iusto. Debitis, numquam."
                      )}
                    </span>
                  </section>
                </li>

                <li id="bubble-sent">
                  <span id="user-meta">{formatMessage("Yo · Hace 1 día")}</span>
                  <section id="message-sent">
                    <span class="chat-message">
                      {formatMessage(
                        "Excepturi maiores temporibus dicta blanditiis quibusdam architecto libero obcaecati eaque labore minus esse earum atque fugit, exercitationem quas qui iusto. Debitis, numquam."
                      )}
                    </span>
                  </section>
                </li>
              </ul>
            </section>

            <section id="typing-message">
              <textarea
                type="text"
                placeholder="Escribe tu mensaje..."
              ></textarea>
              <Button title={formatMessage("Enviar")} />
            </section>
          </section>
        </section>
      </section>
    </React.Fragment>
  );
}

export { Messages };

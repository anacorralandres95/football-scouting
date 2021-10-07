import React from "react";
import { HeaderUser } from "../components/HeaderUser.js";
import "../css/messages.css";

function Messages() {
  return (
    <React.Fragment>
      <HeaderUser />

      <section class="main-page-grid">
        <section class="users">
          <h1>MENSAJES</h1>
          <ul>
            <li>
              <span>Ana Corral</span>
            </li>
          </ul>
        </section>

        <section class="messages">
          <h1>Ana Corral</h1>

          <section class="chat">
            <section id="main-messages">
              <ul>
                <li id="bubble-received">
                  <span id="user-meta">Nombre usuario · Hace 1 día</span>
                  <section id="message-received">
                    <span class="chat-message">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Excepturi maiores temporibus dicta blanditiis quibusdam
                      architecto libero obcaecati eaque labore minus esse earum
                      atque fugit, exercitationem quas qui iusto. Debitis,
                      numquam.
                    </span>
                  </section>
                </li>

                <li id="bubble-sent">
                  <span id="user-meta">Yo · Hace 1 día</span>
                  <section id="message-sent">
                    <span class="chat-message">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </section>
                </li>

                <li id="bubble-received">
                  <span id="user-meta">Nombre usuario · Hace 1 día</span>
                  <section id="message-received">
                    <span class="chat-message">
                      Excepturi maiores temporibus dicta blanditiis quibusdam
                      architecto libero obcaecati eaque labore minus esse earum
                      atque fugit, exercitationem quas qui iusto. Debitis,
                      numquam.
                    </span>
                  </section>
                </li>

                <li id="bubble-sent">
                  <span id="user-meta">Yo · Hace 1 día</span>
                  <section id="message-sent">
                    <span class="chat-message">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Excepturi maiores temporibus dicta blanditiis quibusdam
                      architecto libero obcaecati eaque labore minus esse earum
                      atque fugit, exercitationem quas qui iusto. Debitis,
                      numquam.
                    </span>
                  </section>
                </li>

                <li id="bubble-received">
                  <span id="user-meta">Nombre usuario · Hace 1 día</span>
                  <section id="message-received">
                    <span class="chat-message">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Excepturi maiores temporibus dicta blanditiis quibusdam
                      architecto libero obcaecati eaque labore minus esse earum
                      atque fugit, exercitationem quas qui iusto. Debitis,
                      numquam.
                    </span>
                  </section>
                </li>

                <li id="bubble-sent">
                  <span id="user-meta">Yo · Hace 1 día</span>
                  <section id="message-sent">
                    <span class="chat-message">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Excepturi maiores temporibus dicta blanditiis quibusdam
                      architecto libero obcaecati eaque labore minus esse earum
                      atque fugit, exercitationem quas qui iusto. Debitis,
                      numquam.
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
              <button>
                <a href="">Enviar</a>
              </button>
            </section>
          </section>
        </section>
      </section>
    </React.Fragment>
  );
}

export { Messages };

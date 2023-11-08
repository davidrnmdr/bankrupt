import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #121214;
    --red: #f75a68;
    --red-dark: #aa2834;
    --green: #00878f;
    --green-light: #00b37e;
    --green-dark: #015f43;
    --blue:#567895;
    --blue-light: #6786a0;

    --text-title: #e1e1e6;
    --text-body: #c4c4cc;
    --shape: #202024;
    --shape2: #29292e;
    --shape3: #323238;

    --place-holder: #7c7c8a;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; //14px
    }
}

body {
    background: var(--shape);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    color: var(--text-body);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    color: var(--text-title);
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

.logo{
    width: 16%;
}

.modal-overlay {
background: rgba(255, 255, 255, 0.5);
position: fixed;
top: 0;
bottom: 0;
left: 0;
right:0;

display: flex;
align-items: center;
justify-content: center;
}

.modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--shape);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
}
`;

import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    }

    html, body {
        height: 100%;
    }

    #root {
        height: 100%;
    }

    button {
        cursor: pointer;
    }
    ul {
        list-style: none;
    }
`;
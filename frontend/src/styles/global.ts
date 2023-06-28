import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles =  createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
    }
  }

  body {
    font: 400 1rem 'Montserrat', sans-serif;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  div {
    width: 100%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    width: 80%;
  }

  input {
    width: 100%;
    margin: 10px 0;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }<div class="css-view-175oi2r r-alignSelf-1kihuf0 r-display-6koalj r-justifySelf-1frhg07 r-width-1livr6m"><section><div dir="auto" class="css-text-1rynq56" style="font-size: 20px;">LOGIN</div><input id="email" type="text" class="loginInputs" placeholder="Email" data-testid="email-input" value=""><input id="password" type="password" class="loginInputs" placeholder="Senha" data-testid="password-input" value=""></section><div aria-disabled="true" tabindex="-1" class="css-view-175oi2r r-transitionProperty-1i6wzkk r-userSelect-lrvibr r-pointerEvents-633pao" style="margin-top: 12px; padding: 8px; background-color: rgb(189, 189, 189); transition-duration: 0s; --darkreader-inline-bgcolor:#3d4245;" data-darkreader-inline-bgcolor=""><div dir="auto" class="css-text-1rynq56">Posts</div></div><div tabindex="0" class="css-view-175oi2r r-transitionProperty-1i6wzkk r-userSelect-lrvibr r-cursor-1loqt21 r-touchAction-1otgn73" style="margin-top: 12px; padding: 8px; background-color: rgb(189, 189, 189); transition-duration: 0s; --darkreader-inline-bgcolor:#3d4245;" data-darkreader-inline-bgcolor=""><div dir="auto" class="css-text-1rynq56">Register</div></div></div>

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    @media(max-width:1450px) {
      max-width: 70rem;
    }
    @media(max-width:1000px) {
      max-width: 50rem;
    }
    @media(max-width:700px) {
      padding: 0 2rem;
    }
  }

`;

export default GlobalStyles;

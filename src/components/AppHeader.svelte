<style type="text/scss">
  $nav-text-size: 1.15rem;

  .header {
    box-sizing: border-box;
    width: 100%;
    height: var(--app-header-height, 3.5rem);
    display: flex;
    border-bottom: 1px solid gray;
  }

  .branding {
    flex: 0 0 auto;

    a {
      text-decoration: none;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 1.5rem;

      img {
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
      }

      .title {
        color: var(--main-text-color, white);
        font-size: 1.25rem;
        font-weight: 400;
        font-family: "Nova Mono", monospace;
      }
    }
  }

  .header-nav {
    flex: 0 0 auto;
    display: flex;

    .nav-link {
      text-decoration: none;
      padding: calc((var(--app--header-height, 3.5rem) - #{$nav-text-size}) / 2)
        1.5rem;

      &:hover {
        background-color: rgba(255, 255, 255, 0.25);
      }
    }

    .nav-text {
      color: var(--main-text-color, white);
      font-family: Roboto, "sans-serif";
      font-size: $nav-text-size;
      font-weight: 400;
      opacity: 0.85;
    }
  }

  .header-actions {
    flex: 1 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 1rem;

    .lang-btn {
      background-color: var(--main-bg-color, black);
      margin: 0;
      padding: 0.5rem;
      border: 1px solid transparent;
      transition: border 0.4s;
      -webkit-transition: border 0.4s;
      -moz-transition: border 0.4s;
      -o-transition: border 0.4s;

      img {
        display: block;
        width: 24px;
        height: 24px;
      }

      &:focus,
      &:hover {
        cursor: pointer;
        border: 1px solid #999;
      }

      &:active {
        background-color: #999;
      }
    }
  }
</style>

<header class="header">
  <div class="branding">
    <a href="/" class="nav-link">
      <img src="favicon.png" alt="Fanhunter Rogue icon" />
      <span class="title">Fanhunter Rogue</span>
    </a>
  </div>
  <div class="header-nav">
    <a href="/about" class="nav-link nav-text">About</a>
    <a href="/contact" class="nav-link nav-text">Contact</a>
  </div>
  <div class="header-actions">
    <button class="lang-btn">
      <img src="/assets/english-round-btn.png" alt="Language icon" />
    </button>
  </div>
</header>

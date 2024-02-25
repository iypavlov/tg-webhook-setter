(() => {
  const formElement = document.getElementById('form');
  const responseElement = document.getElementById('response');

  formElement.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      const data = await fetch(`https://api.telegram.org/bot${ e.target.token.value }/setWebhook?url=${ e.target.url.value }`)
      .then(res => res.json());

      responseElement.innerHTML = JSON.stringify(data, undefined, 2);
    } catch (e) {
      alert(e);
    }
  });
})();


const translations = {
  it: {
    welcome: "Benvenuto in MultiLingua",
  },
  en: {
    welcome: "Welcome to MultiLingua",
  },
  de: {
    welcome: "Willkommen bei MultiLingua",
  },
  pt: {
    welcome: "Bem-vindo ao MultiLingua",
  },
  fr: {
    welcome: "Bienvenue dans MultiLingua",
  },
  es: {
    welcome: "Bienvenido a MultiLingua",
  }
};

function changeLanguage(lang) {
  document.getElementById("welcome").innerText = translations[lang].welcome;
}

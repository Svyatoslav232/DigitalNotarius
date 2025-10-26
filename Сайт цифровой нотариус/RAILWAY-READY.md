# 🚂 Проект готов для Railway!

## ✅ Что настроено:

- ✅ `package.json` - с serve зависимостью
- ✅ `railway.json` - упрощенная конфигурация
- ✅ `Procfile` - команда запуска
- ✅ Все файлы сайта в корне
- ✅ `.gitignore` настроен

---

## 📤 Как загрузить на GitHub и Railway:

### Шаг 1: Загрузка на GitHub

```bash
# В терминале выполните:
git add .
git commit -m "Ready for Railway deployment"
git push origin main
```

Или через GitHub Desktop:
- Сделайте commit
- Push origin

### Шаг 2: Подключение к Railway

1. Зайдите на https://railway.app
2. Войдите через GitHub
3. Нажмите "New Project"
4. Выберите "Deploy from GitHub repo"
5. Выберите ваш репозиторий
6. Railway начнет деплой автоматически

---

## 🔧 Настройки Railway:

**Service Type:** Node.js (автоматически)
**Build Command:** (не нужен)
**Start Command:** `npx serve -s` (из Procfile)
**Port:** Автоматически определяется

---

## ✅ После деплоя:

Railway даст вам ссылку вида:
`https://your-project.up.railway.app`

---

## 📁 Структура проекта:

```
digital-notary-website/
├── index.html          # Главная страница
├── styles.css         # Стили
├── script.js          # Скрипты
├── package.json        # Настройки Railway
├── railway.json       # Конфиг Railway
├── Procfile           # Команда запуска
├── .gitignore         # Игнорируемые файлы
└── .railwayignore     # Что игнорирует Railway
```

---

## 🎯 Готово!

Просто загрузите на GitHub и подключите Railway!


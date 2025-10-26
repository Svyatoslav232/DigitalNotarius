# 🌐 Способы загрузки сайта на хостинг

## 1. 🟦 NETLIFY (Лучший вариант, простой)
**Ссылка:** https://www.netlify.com/drop

**Как:**
- Перетащите папку `deploy-ready`
- Автоматически получите ссылку
- ✅ Бесплатно
- ✅ Автоматический SSL
- ✅ Быстро

---

## 2. 🟧 VERCEL (Другой простой вариант)
**Ссылка:** https://vercel.com

**Как:**
- Перетащите папку `deploy-ready`
- Минимальные настройки
- ✅ Бесплатно
- ✅ Отличная производительность

---

## 3. 🟩 GITHUB PAGES (Требует GitHub аккаунт)
**Ссылка:** https://pages.github.com

**Как:**
1. Создайте аккаунт на GitHub
2. Создайте новый репозиторий (назовите например: `digital-notary-website`)
3. Загрузите все файлы из `deploy-ready`
4. В Settings → Pages выберите источник `main` branch
5. Сайт будет на `your-username.github.io/repo-name`

✅ Бесплатно
✅ Интеграция с Git

---

## 4. 🔵 SURGE (Простой статический хостинг)
**Ссылка:** https://surge.sh

**Как:**
```bash
npm install -g surge
cd deploy-ready
surge
```
Следуйте инструкциям в терминале

✅ Бесплатно для статических сайтов
✅ Простая настройка

---

## 5. 🟨 RAILWAY (Подходит для больших проектов)
**Ссылка:** https://railway.app

**Как:**
- Создайте аккаунт
- Нажмите "New Project" → "Deploy from GitHub repo"
- Подключите репозиторий

✅ Бесплатный тариф есть
✅ Автоматический деплой

---

## 6. 🟪 RENDER (Хорошая альтернатива)
**Ссылка:** https://render.com

**Как:**
- Создайте аккаунт
- "New" → "Static Site"
- Загрузите папку `deploy-ready`
- Нажмите "Create Static Site"

✅ Бесплатно
✅ Автоматический SSL

---

## 7. 📦 Firebase Hosting (От Google)
**Ссылка:** https://firebase.google.com

**Как:**
1. Установите Firebase CLI: `npm install -g firebase-tools`
2. Зайдите в папку: `cd deploy-ready`
3. Выполните: `firebase init hosting`
4. Затем: `firebase deploy`

✅ Бесплатно до 10GB
✅ Быстрый CDN от Google

---

## 🎯 РЕКОМЕНДАЦИЯ: 

### Для быстрого старта:
**NETLIFY** или **VERCEL** - просто перетащите папку!

### Если у вас уже есть GitHub:
**GitHub Pages** - бесплатно, постоянный домен

### Для продвинутого использования:
**Firebase Hosting** или **Railway**

---

## 📁 Что нужно загрузить?

Все файлы из папки `deploy-ready`:
- index.html
- styles.css
- script.js
- netlify.toml (опционально)

---

💡 **Самый простой способ:** Netlify Drop!


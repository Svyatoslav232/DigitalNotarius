# 🚀 Как загрузить проект на GitHub и задеплоить на Railway

## 📋 Шаг 1: Создайте репозиторий на GitHub

1. Зайдите на https://github.com
2. Нажмите "New repository"
3. Назовите репозиторий: `digital-notary-website`
4. Выберите **Public** или **Private**
5. **НЕ** добавляйте README, .gitignore или лицензию
6. Нажмите "Create repository"

---

## 📤 Шаг 2: Загрузите файлы на GitHub

### Вариант A: Через GitHub Desktop (проще всего)

1. Скачайте GitHub Desktop: https://desktop.github.com
2. Установите и войдите
3. Добавьте репозиторий: `File` → `Add local repository`
4. Выберите папку: `/Users/mishinsvatoslav/Desktop/Сайт цифровой нотариус`
5. Напишите commit message: "Initial commit"
6. Нажмите "Commit to main"
7. Нажмите "Publish repository"

### Вариант B: Через терминал

Откройте терминал в папке проекта и выполните:

```bash
# Инициализируйте Git
git init

# Добавьте все файлы
git add .

# Сделайте первый commit
git commit -m "Initial commit"

# Добавьте remote (замените YOUR_USERNAME на ваш GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/digital-notary-website.git

# Загрузите файлы
git branch -M main
git push -u origin main
```

---

## 🚂 Шаг 3: Подключите Railway

1. Зайдите на https://railway.app
2. Войдите через GitHub
3. Нажмите "New Project"
4. Выберите "Deploy from GitHub repo"
5. Выберите репозиторий `digital-notary-website`
6. Railway автоматически:
   - Определит проект как Static
   - Запустит сборку
   - Задеплоит сайт
7. Получите ссылку на ваш сайт!

---

## ✅ Что будет работать:

- ✅ Статический сайт
- ✅ Все анимации
- ✅ Мобильная версия
- ✅ SSL сертификат
- ✅ Быстрый CDN

---

## 🔧 Настройки в проекте:

Уже добавлено:
- `package.json` - для Railway
- `railway.json` - настройки деплоя
- `.railwayignore` - что игнорировать
- `.gitignore` - что не коммитить

---

## 📝 Важно:

⚠️ **НЕ загружайте папку `deploy-ready`** - она для локального использования

---

## 🎯 Готово!

После загрузки на Railway ваш сайт будет доступен по ссылке:
`https://your-project-name.up.railway.app`


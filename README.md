# Тестовое задание на практику (frontend)

==API реализован с использованием ElysiaJS, для запуска нужна среда [Bun](https://bun.sh/)==

## Для запуска фронтенда
```bash
yarn
yarn dev
```

## Для запуска API
```bash
cd api
bun
bunx prisma migrate
bun run dev
```

Документация API доступна по адресу: `http://<host>:<port>/swagger`

## Выполнено:
- [X] Подгрузка задач частями (Intersection Observer)
- [X] CRUD на клиенте (Effector)
- [X] Сортировка по дате создания
- [X] Фильтрация по приоритету и отметкам
- [X] Elysia + Prisma CRUD API

# Тестовое задание на практику (frontend)

> [!IMPORTANT]
> API реализован с использованием [Elysia](https://elysiajs.com/), для запуска нужна среда [Bun](https://bun.sh/)


## Для запуска фронтенда
```bash
yarn
cp .env.example .env
yarn dev
```

## Для запуска API
```bash
cd api
bun
cp .env.example .env
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

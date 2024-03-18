-- CreateTable
CREATE TABLE "Task" (
    "uid" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "priority" TEXT NOT NULL DEFAULT 'Low'
);

-- CreateTable
CREATE TABLE "TaskTag" (
    "taskUid" TEXT NOT NULL,
    "tagId" INTEGER NOT NULL,

    PRIMARY KEY ("taskUid", "tagId"),
    CONSTRAINT "TaskTag_taskUid_fkey" FOREIGN KEY ("taskUid") REFERENCES "Task" ("uid") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "TaskTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

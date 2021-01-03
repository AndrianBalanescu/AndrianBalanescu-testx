# Migration `20210103025411-migration`

This migration has been generated by Flomastermod at 1/2/2021, 8:54:11 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "UserExample" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
)

CREATE UNIQUE INDEX "UserExample.email_unique" ON "UserExample"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20210103025411-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,20 @@
+datasource DS {
+  // optionally set multiple providers
+  // example: provider = ["sqlite", "postgresql"]
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = "native"
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+// TODO: Please remove the following example:
+model UserExample {
+  id    Int     @id @default(autoincrement())
+  email String  @unique
+  name  String?
+}
```


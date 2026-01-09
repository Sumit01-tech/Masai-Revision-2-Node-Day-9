# Day 9: Database Scaling & Performance

## Theoretical Questions

### 1. What is database scaling? Explain vertical vs horizontal scaling.

**Database scaling** is the process of increasing a database’s capacity to handle more data, users, or queries efficiently.

* **Vertical Scaling (Scale Up):** Increasing resources of a single server (CPU, RAM, SSD).

  * Pros: Simple to implement, no application changes.
  * Cons: Hardware limits, single point of failure, expensive.

* **Horizontal Scaling (Scale Out):** Adding more servers and distributing data/load.

  * Pros: High availability, better fault tolerance, virtually unlimited growth.
  * Cons: Complex architecture, requires data distribution logic.

---

### 2. What is database replication? Explain master-slave replication.

**Database replication** is copying data from one database to one or more replicas to improve availability and read performance.

**Master-Slave Replication:**

* Master handles all write operations.
* Slave replicas handle read operations.
* Data is asynchronously or synchronously copied from master to slaves.

Benefits include read scalability and backup, while drawbacks include replication lag.

---

### 3. What is database sharding? How does it work?

**Sharding** is a horizontal scaling technique where data is split across multiple databases called shards.

How it works:

* A shard key (e.g., userId) is chosen.
* Data is distributed based on ranges, hashing, or geography.
* Each shard stores only a subset of the data.

This reduces load per database and improves performance.

---

### 4. What are the challenges of sharding?

* Complex queries across shards
* Rebalancing data when shards grow
* Cross-shard joins and transactions
* Choosing the correct shard key
* Operational and maintenance complexity

---

### 5. What is database partitioning? How does it differ from sharding?

**Partitioning** divides a table into smaller parts within the same database server.

**Difference:**

* Partitioning happens inside one database instance.
* Sharding distributes data across multiple database servers.

Partitioning improves manageability, while sharding improves scalability.

---

### 6. What is a connection pool? Why is it important?

A **connection pool** maintains a set of reusable database connections.

Importance:

* Reduces connection creation overhead
* Improves application performance
* Prevents exhausting database connections

---

### 7. What are N+1 queries? How do you solve this problem?

**N+1 Query Problem:**

* One query fetches N records.
* N additional queries fetch related data.

Solutions:

* Use joins
* Use eager loading / populate
* Batch queries

---

### 8. What is caching? Explain different caching strategies.

**Caching** stores frequently accessed data in fast storage (memory) to reduce database load.

* **Cache-Aside:** Application checks cache first, loads from DB on miss.
* **Write-Through:** Data written to cache and DB simultaneously.
* **Write-Back (Write-Behind):** Data written to cache first, DB updated asynchronously.

---

### 9. What is the CAP theorem?

The **CAP theorem** states that a distributed system can guarantee only two of the following three:

* **Consistency** – all nodes see the same data
* **Availability** – every request gets a response
* **Partition Tolerance** – system works despite network failures

---

### 10. What are database transactions? What is MVCC?

**Transactions** are a sequence of operations executed as a single unit, following **ACID** properties.

**MVCC (Multi-Version Concurrency Control):**

* Maintains multiple versions of data
* Readers do not block writers
* Writers create new versions instead of overwriting data

Used in databases like PostgreSQL and MySQL (InnoDB).

---


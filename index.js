class SimpleQueryOptimizer {
    constructor() {
        this.queryCount = {};
        this.cache = {};
    }
    analyzeQuery(query) {
        const fields = Object.keys(query.filters).sort().join(',');

        this.queryCount[fields] = (this.queryCount[fields] || 0) + 1;
    }
    suggestIndexes(minUsage = 2) {
        const indexes = [];
        for (let fields in this.queryCount) {
            if (this.queryCount[fields] >= minUsage) {
                indexes.push(
                    `CREATE INDEX idx_${fields.replace(/,/g, '_')} ON table_name (${fields});`
                );
            }
        }
        return indexes;
    }
    runQuery(query, dbFunction) {
        const key = JSON.stringify(query.filters);
        if (this.cache[key]) {
            return this.cache[key];
        }
        const result = dbFunction(query);
        this.cache[key] = result;
        return result;
    }
}
const optimizer = new SimpleQueryOptimizer();
const q1 = { filters: { userId: 1, status: 'active' } };
const q2 = { filters: { userId: 1, status: 'active' } };
const q3 = { filters: { userId: 2 } };

optimizer.analyzeQuery(q1);
optimizer.analyzeQuery(q2);
optimizer.analyzeQuery(q3);

console.log(optimizer.suggestIndexes());

const data = optimizer.runQuery(q1, () => {
    return 'Fetched from database';
});

console.log(data);

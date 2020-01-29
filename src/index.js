const Collection = {
  items: [],
  toString: function() {
    return `Collection: ${this.items.join(", ")}`;
  }
};

const SortDedupCollection = Object.create(Collection);

SortDedupCollection.of = function(...elements) {
  this.items.push(...new Set(elements));
  return this;
};

console.log(SortDedupCollection.of(1, 2, 2, 3, 3, 4, 5, 5, 5));

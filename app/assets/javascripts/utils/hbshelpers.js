Handlebars.registerHelper( "when",function(operand_1, operator, operand_2, options) {

    var operators = {
        'eq': function(l,r) { return l == r; },
        'noteq': function(l,r) { return l != r; },
        'gt': function(l,r) { return Number(l) > Number(r); },
        'or': function(l,r) { return l || r; },
        'and': function(l,r) { return l && r; },
        '%': function(l,r) { return (l % r) === 0; }
    }
    , result = operators[operator](operand_1,operand_2);

    if (result) return options.fn(this);
    else  return options.inverse(this);

});

/* Get user attributes by giving a collection, the user_id, the attribute key name */
/* Example : {{#getUserAttributes ../members user_id "image"}} */

Handlebars.registerHelper('getUserAttributes', function(collection, id, attribute) {
    var collectionLength = collection.length;
    for (var i = 0; i < collectionLength; i++) {
        if (collection[i].id === id) {
            return collection[i][attribute];
        }
    }
    return null;
});
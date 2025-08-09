// utils/paginate.js
async function paginate(model, query = {}, options = {}) {
    const { page = 1, limit = 10, populate = '', sort = {} } = options;

    const skip = (page - 1) * limit;

    // Fetch data
    const [data, total] = await Promise.all([
        model.find(query).populate(populate).sort(sort).skip(skip).limit(limit),
        model.countDocuments(query)
    ]);

    return {
        data,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            hasNextPage: page * limit < total,
            hasPrevPage: page > 1
        }
    };
}

module.exports = paginate;

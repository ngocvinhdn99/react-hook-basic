import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    pageChange: PropTypes.func,
};

Pagination.defaultProps = {
    pageChange: null
}

function Pagination(props) {
    const { pagination, pageChange } = props
    const { _page, _limit, _totalRows } = pagination
    const maxPage = Math.ceil(_totalRows / _limit)

    function handlePageChange(newPage) {
        if (pageChange) {
            pageChange(newPage)
        }
    }

    return (
        <div>
            <button
                disabled={_page <= 1}
                onClick={() => { handlePageChange(_page - 1) }}
            >
                Prev
            </button>

            <button
                disabled={_page >= maxPage}
                onClick={() => { handlePageChange(_page + 1) }}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
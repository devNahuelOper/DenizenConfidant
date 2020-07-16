export const fetchDjs = () => (
  $.ajax({
    method: 'GET',
    url: 'api/djs'
  })
);

export const fetchDj = djId => (
  $.ajax({
    method: 'GET',
    url: `api/djs/${djId}`
  })
);

export const createDj = djData => (
  $.ajax({
    method: 'POST',
    url: 'api/djs',
    data: djData,
    contentType: false,
    processData: false
  })
);

export const updateDj = (djData, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/djs/${id}`,
    data: djData,
    contentType: false,
    processData: false
  })
)
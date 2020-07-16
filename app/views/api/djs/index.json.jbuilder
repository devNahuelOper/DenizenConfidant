@djs.each do |dj|
  json.set! dj.id do
    json.partial! 'api/djs/dj', dj: dj
  end
end
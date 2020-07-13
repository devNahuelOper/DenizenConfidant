# json.partial! '/api/events/id', event: @event
json.extract! event, :id,:name, :venue, :location, :date, :headliners, :description
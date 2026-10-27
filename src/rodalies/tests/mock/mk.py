import json
E=[["5193J35522R3",120],["5193J78610R8",0],["5193J77522R4",420],["5193J28282R2S",1200],["5193J78640R8",960],["5193J77616R4",2220],["5193J28420R2N",2400],["5193J15908R11",900],["5193J25728R1",-60],["5193J25630R1",900],["5193J77412R4",780],["5193J25621R1",720],["5193J15854R11",660],["5193J25416R2N",960]]
p=json.load(open('rod_pack.json')); T=set(p['tids'])
print('coinciden',sum(1 for t,_ in E if t in T),'de',len(E))
json.dump({"header":{"gtfsRealtimeVersion":"2.0","timestamp":"1792659635"},"entity":[{"id":"TU_"+t,"tripUpdate":{"trip":{"tripId":t,"scheduleRelationship":"SCHEDULED"},"delay":d}} for t,d in E]},open('mock/trip_updates.json','w'))
json.dump({"header":{"timestamp":"1792659635"},"entity":[{"id":"VP_"+t,"vehicle":{"trip":{"tripId":t}}} for t,_ in E]},open('mock/vehicle_positions.json','w'))

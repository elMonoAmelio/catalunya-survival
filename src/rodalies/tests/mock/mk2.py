import json,time,sys
sys.path.insert(0,'rt'); 
exec(open('rt/vp_sample.py').read().split('import json,math')[0])
now=int(time.time())-20
st={'IN':'INCOMING_AT','ST':'STOPPED_AT'}
vp={"header":{"timestamp":str(now)},"entity":[{"id":"VP_"+t,"vehicle":{"trip":{"tripId":t},"position":{"latitude":la,"longitude":lo},"currentStatus":st[s] if t!='5193J15060R17' else 'IN_TRANSIT_TO',"timestamp":str(now),"stopId":sid,"vehicle":{"id":t[5:10],"label":t[10:]+'-'+t[5:10]+('-PLATF.(3)' if i%5==0 else '')}}} for i,(t,s,sid,la,lo) in enumerate(V)]}
D={"5193J25621R1":720,"5193J28420R2N":2400,"5193J77418R4":780,"5193J25732R1":0,"5193J15908R11":900}
tu={"header":{"timestamp":str(now)},"entity":[{"id":"TU_"+t,"tripUpdate":{"trip":{"tripId":t,"scheduleRelationship":"SCHEDULED"},"stopTimeUpdate":[{"arrival":{"delay":d,"time":str(now+400)},"stopId":"79606"}],"delay":d}} for t,d in D.items()]}
al={"header":{},"entity":[
 {"id":"AVISO_518352","alert":{"activePeriod":[{"start":"1791356520"}],"informedEntity":[{"routeId":"51T0013R2"}],"descriptionText":{"translation":[{"text":"Sin servicio ferroviario.","language":"es"}]}}},
 {"id":"AVISO_518348","alert":{"activePeriod":[{"start":"1791355080"}],"informedEntity":[{"routeId":"51T0001R1"}],"descriptionText":{"translation":[{"text":"Circulación ferroviaria entre L'Hospitalet de Llobregat y Blanes fuera de su horario habitual. Se establece un servicio alternativo por carretera entre Blanes y Maçanet-Massanes","language":"es"}]}}},
 {"id":"INFO_1","alert":{"activePeriod":[{"start":"1791357480"}],"informedEntity":[{"stopId":"70100"}],"descriptionText":{"translation":[{"text":"Ascensor de Vicálvaro fuera de servicio","language":"es"}]}}}]}
for n,o in (('vehicle_positions',vp),('trip_updates',tu),('alerts',al)): json.dump(o,open(f'app/mock/{n}.json','w'))
print('ok',len(vp['entity']))

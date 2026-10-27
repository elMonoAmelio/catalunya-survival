import re
SH_OK={'basic_hut','lean_to','rock_shelter','weather_shelter','wildlife_hide','hut','refuge','yes','unknown',None}
def cat(t):
    a=t.get('amenity'); n=t.get('natural'); tu=t.get('tourism'); l=t.get('landuse'); m=t.get('military')
    if a=='drinking_water': return 'fuente'
    if a=='water_point': return 'fuente'
    if n=='spring': return 'manantial'
    if tu=='alpine_hut': return 'refugio'
    if tu=='wilderness_hut': return 'refugio_libre'
    if a=='shelter':
        st=t.get('shelter_type')
        if st in ('public_transport','picnic_shelter','gazebo','sun_shelter','changing_rooms','field_shelter'): return None
        return 'abrigo'
    if a=='hospital' or t.get('healthcare')=='hospital': return 'hospital'
    if a in ('clinic','doctors'): return 'cap'
    if a=='pharmacy': return 'farmacia'
    if t.get('emergency')=='defibrillator': return 'dea'
    if a=='police': return 'policia'
    if a=='fire_station': return 'bomberos'
    if l=='military' or m in ('barracks','base','airfield','naval_base','office','training_area','range'): return 'militar'
    if t.get('harbour')=='yes' or t.get('leisure')=='marina' or l=='port' or t.get('industrial')=='port': return 'puerto'
    if t.get('aeroway') in ('aerodrome','heliport'): return 'aeropuerto'
    if t.get('railway')=='station': return 'estacion'
    if t.get('barrier')=='border_control': return 'frontera'
    if t.get('mountain_pass')=='yes': return 'collado'
    return None
KEEP=['name','operator','opening_hours','phone','ele','drinking_water','shelter_type','capacity','fee','emergency','healthcare','military','aeroway','railway','station','access','beds','seasonal','dispensing','indoor','website','description','addr:city','addr:street','addr:housenumber','police','military_service','sport']

def keep(t): return {k:t[k] for k in KEEP if k in t}

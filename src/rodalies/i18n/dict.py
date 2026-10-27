# une t1 (por índice de src_v1) y t2 (por texto) en dict.json: castellano → {ca, en}
import json, importlib.util, os
H = os.path.dirname(os.path.abspath(__file__))
def load(n):
    s = importlib.util.spec_from_file_location(n, os.path.join(H, n + '.py')); m = importlib.util.module_from_spec(s); s.loader.exec_module(m); return m.T
src = json.load(open(os.path.join(H, 'src_v1.json'), encoding='utf8'))
D = {}
for i, v in load('t1').items():
    es = src[i]
    if isinstance(v, list):
        ca, en = es, es
        for a, c, e in v:
            assert a in es, (i, a); ca = ca.replace(a, c); en = en.replace(a, e)
        D[es] = {'ca': ca, 'en': en}
    else: D[es] = {'ca': v[0], 'en': v[1]}
for es, (ca, en) in load('t2').items(): D[es] = {'ca': ca, 'en': en}
json.dump(D, open(os.path.join(H, 'dict.json'), 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print('dict', len(D))

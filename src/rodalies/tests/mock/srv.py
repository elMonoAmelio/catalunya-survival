import http.server,os
os.chdir(os.path.dirname(__file__))
class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self): self.send_header('Access-Control-Allow-Origin','*'); super().end_headers()
    def log_message(self,*a): pass
    def do_GET(self):
        if self.path.startswith('/departures.json'): self.path='/departures.json'
        return super().do_GET()
http.server.ThreadingHTTPServer(('127.0.0.1',8790),H).serve_forever()

from http.server import HTTPServer, SimpleHTTPRequestHandler

# 自定义请求处理器，添加 CORS 头
class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # 在所有响应中添加 CORS 头
        self.send_header('Access-Control-Allow-Origin', '*')  # 允许所有域名跨域（生产环境建议指定具体域名）
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')  # 允许的请求方法
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')  # 允许的请求头
        self.send_header('Access-Control-Max-Age', '86400')  # 预检请求缓存时间（24小时）
        super().end_headers()

    # 处理 OPTIONS 请求（浏览器预检请求）
    def do_OPTIONS(self):
        self.send_response(200, "OK")
        self.end_headers()

# 启动服务器
if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=8804, help='服务器端口（默认 8000）')
    parser.add_argument('--directory', default='.', help='服务根目录（默认当前目录）')
    args = parser.parse_args()

    # 切换到指定服务目录
    import os
    os.chdir(args.directory)

    # 启动 HTTP 服务器
    server_address = ('', args.port)
    httpd = HTTPServer(server_address, CORSRequestHandler)
    print(f"支持 CORS 的静态服务器已启动：http://localhost:{args.port}")
    print(f"服务根目录：{os.path.abspath(args.directory)}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n服务器已停止")
        httpd.server_close()
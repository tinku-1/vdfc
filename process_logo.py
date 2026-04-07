import sys
import os

try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'Pillow'])
    from PIL import Image

def remove_white_bg(input_path, output_path, tolerance=235):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        if item[0] >= tolerance and item[1] >= tolerance and item[2] >= tolerance:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_white_bg("public/vdfc-logo.jpeg", "public/vdfc-logo-transparent.png")

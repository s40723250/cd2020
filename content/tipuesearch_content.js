var tipuesearch = {"pages": [{'title': '第二學期', 'text': 'week1~5 \n week6~10 \n week11~15 \n', 'tags': '', 'url': '第二學期.html'}, {'title': 'Week1~5', 'text': 'week1 \n 建立倉儲cd2020 \n 開啟黑窗 \n 先輸入git clone\xa0 https://github.com/s40723250/cd2020.git \n 再輸入git submodule add\xa0 https://github.com/mdecourse/cmsimde.git\xa0 \xa0( 將cmsimde載入自己的倉儲 ) \n 把up_dir複製到cd2020 \n 更改內容後轉成靜態網站推送 \n \n week2 \n 升級python3.8.2 \n 1.先新增data資料夾，在data下新增資料夾py382、wscite432、portablegitwscite432、portablegit。 \n 2.到 https://www.python.org/downloads/release/python-382/ \xa0 下載Windows x86 web-based installer。 \n 3.開始下載，必須將pip選項取消，接著按下next並將檔案下載至資料夾py382。 \n 4.到 https://www.scintilla.org/SciTEDownload.html \xa0下載 full 64-bit download \xa0，下載完成後解壓縮到資料夾 wscite432。 \n 5.建立新的start.bat及stop.bat。(下方) \n 6.下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data下。 \n 7. 到 https://bootstrap.pypa.io/get-pip.py 頁面，滑鼠右鍵另存新檔到data下。 \n 8.輸入指令 \n \n python get - pip.py \n pip install flask bs4 lxml pelican markdown flask_cors leo \n \n 9.git clone自己的倉儲 \n \n Week3 \n \n 亂數分組 \n 示範影片:https://www.youtube.com/watch?v=-R46sIX-r14 \n \n 學習歷程WEEK1~3 \n 介紹影片 \n \n Week4 \n 亂數分組教學 \n week5 \n', 'tags': '', 'url': 'Week1~5.html'}, {'title': '開直播分配工作及問題討論', 'text': '40623115 亂數分組程式 \n 40623251 可攜系統 \n 40723204\xa0 可攜系統 \n 40723210 四輪車\xa0 (組長) \n 40723212\xa0 四輪車 \n 40723225\xa0 四輪車 \n 40723232\xa0 亂數分組程式 \n 40723234\xa0 可攜系統 \n 40723238\xa0 四輪車 \n 40723245\xa0 亂數分組程式 \n 40723250\xa0 亂數分組程式 \n \n 直播影片 :\xa0 https://www.youtube.com/watch?v=r0AABAp474U \n \n', 'tags': '', 'url': '開直播分配工作及問題討論.html'}, {'title': 'week6~10', 'text': '', 'tags': '', 'url': 'week6~10.html'}, {'title': 'week11~15', 'text': '', 'tags': '', 'url': 'week11~15.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};
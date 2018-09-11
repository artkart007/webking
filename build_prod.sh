#!/usr/bin/env bash
webking_ui_path=`pwd`
echo "webking_ui_path ---- >>>>" $webking_ui_path

#build UI
cd $webking_ui_path && yarn && yarn build && http-server ./build -p 8070

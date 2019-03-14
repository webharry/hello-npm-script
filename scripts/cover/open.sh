# 增加可执行权限
chmod +x /Users/yangjie/workspace/npm-script/scripts/cover/open.sh
#这里有个 sleep，是为了确保文件系统写入完成
sleep 1
opn http://localhost:$npm_package_config_port
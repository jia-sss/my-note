## Tmux终端复用

```shell
# 新建会话窗口
tmux new -s <session-name>

# 登陆一个会话  使用窗口编号或名字
tmux a -t <session-name>

# 分离会话(会话后台运行)  Ctrl+b d 或者 tmux detach 命令
tmux detach

# 查看当前所有的 Tmux 会话
tmux ls

```
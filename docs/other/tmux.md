## Tmux终端复用

```shell
# 新建会话窗口
tmux new -s <session-name>

# 退出终端  按下Ctrl+d或者显式输入exit命令
exit

# 登陆一个会话  使用窗口编号或名字
tmux a -t <session-name>

# 分离会话(会话后台运行)  Ctrl+b d 或者 tmux detach 命令
tmux detach

# 查看当前所有的 Tmux 会话
tmux ls

# 杀死会话
tmux kill-session -t 0  # 使用会话编号
tmux kill-session -t SESSION_NAME  # 使用会话名称

# 切换会话
tmux switch -t 0

# 重命名会话
tmux rename-session -t 0 SESSION_NAME  # 将0号会话重命名为SESSION_NAME

```
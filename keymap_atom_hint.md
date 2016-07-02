ヴぃ##  atom keybindings
Markdownのプレービュー表示 : control + shift + M  
コメントアウト	：Ct：rl + /  
単語を選択　:Ctrl + D　：※入力ごとに同じ単語を選択  
単語の末尾に移動  :Alt + F  
単語の先頭に移動  :Alt + B  
行の末尾に移動	  :End	control + E  
矩形選択        :Ctrl + Alt + 上矢印キー or 下矢印キー  
複数箇所選択    :	Ctrl + クリック  
インデントを一つ追加　:Ctrl + ]　※複数行もOK  
インデントを一つ削除　:Ctrl + [	※複数行もOK  
行の選択	:Ctrl + L  
行の削除	:Ctrl + Shift + K  
行ごと移動	：Ctrl + 上矢印キー or 下矢印キー  
行ごと下の行へコピー	：Ctrl + Shift + D  
行の下に空行を挿入	：Ctrl + Enter  
行の上に空行を挿入	：Ctrl + Shift + Enter  
画面を右に分割	：(Ctrl + K) + 右矢印キー  
画面を下に分割	：(Ctrl + K) + 下矢印キー  
画面を閉じる	Ctrl + W  
タブを閉じる  :ctrl-W  
設定画面: ctrl+,  
スニペット表示:alt-Shift-S :頻繁に使うコードをショートカットキーで呼び出せる  

## plugin の起動
git-plus      :Ctrl-Shift-H  :git-plusのパネルを表示させる  
Atom Beautify         :ctrl-alt-b　:　自動整形  
atom-html-preview     :ctrl-shift-H : htmlﾌｧｲﾙをプレビューしてくれる  

## git-plus Command
ctrl-Shift-A	 :カレントファイルを git add する  
ctrl-Shift-A P	:git add, commit, push まで行う  
ctrl-Shift-C	   :git commit  
ctrl-Shift-A c	:git add , commit まで行う  
ctrl-Shift-A a	:全てのファイルを git add と commit する  

##


## プラグイン　Browser Plus
open(開く)     :ctrl-alt-o	:git-controlと競合しているkeybind  
close(閉じる)  :ctrl+w (atomの閉じるコマンド)  
history（履歴） :ctrl-alt-h:  
openDevTool（開発ツール）:f12  

##　vim
### モード　
i	 : カーソル位置に文字入力  
o	 : カーソル位置の下に文字入力  
n	 : 文字の入力が終わったら ノーマルモード に戻ります。  
v	 : ビジュアルモード  
vB : 	.visual-mode.blockwise  
vL : 	.visual-mode.linewise  
vC : 	.visual-mode.characterwise  
iR : 	.insert-mode.replace  
!i : 	:not(.insert-mode)	except insert-mode  
#	 : .with-count	when count is specified  

## カーソル移動
h : 左  j : 下  k : 上 l : 右  
gg : ﾌｧｲﾙの先頭に移動  
G　 :ﾌｧｲﾙの最後に移動  

## 文字削除
n gv	select-previous-selection	Select last selected visual area in current buffer
!i d
x :一文字削除  
v x	delete  
n x	delete-right
n X	delete-left
!i D	delete-to-last-character-of-line
!i g~
o,v ~	toggle-case
!i ~	toggle-case-and-move-right
!i gU
o,v U	upper-case
!i gu
o,v u	lower-case
split-character
!i gc	camel-case
snake-case	CamelCase -> camel_case
!i g-	dash-case

#!/bin/bash
#
#Bloco 1 Aula 5 Parte 1
#
#____________________________Exercício 1
#
#echo "Shell Script é demais!"
#
#____________________________Exercício 2
#
#cmand="Shell Script com variáveis é demais!"
#echo $cmand
#
#____________________________Exercício 3
#
#host=$(hostname)
#echo "Este script está rodando no computador: $host"
#
#____________________________Exercício 4
#
#
#FILE="/mnt/c/Users/rfrei/TRYBE/bloco1/Shell Script"
#if [ -e "$FILE" ]
#  then
#     echo "O caminho $FILE está habilitado!"
#fi
#if [ -w "$FILE" ]
#  then
#    echo "Você tem permissão para editar $FILE"
#  else
#    echo "Você NÃO foi autorizado a editar $FILE"
#fi
#
#
#
#_____________________________Exercício 5
#
#
#
#var="shell script usando estrutura repeticao for terminal"
#for ITEM in $var
#do
#    echo $ITEM
#done
#
#
#_____________________________Exercício 6
#
#read -p "Escreva um filepath: " 1
#if [ -d $1 ]
#then
#    echo "$1 é um diretório"
#    echo "`ls -l $1`"
#elif [ -f $1 ]
#then 
#    echo "$1 é um arquivo"
#    echo "`ls -l $1`"
#else
#    echo "Não é nada"
#fi
#
#
#_____________________________Exercício 7
#
#
#if [ -d $1 ]
#then
#    echo "$1 é um diretório"
#    echo "`ls -l $1`"
#elif [ -f $1 ]
#then 
#    echo "$1 é um arquivo"
#    echo "`ls -l $1`"
#else
#    echo "Não é nada"
#fi
#
#
#_____________________________Exercício 8
#
##
#var=$@
#for item in $var
#do  
#    if [ -d $item ]
#    then
#        echo "$item é um diretório"
#        echo "`ls -l $item`"
#    elif [ -f $item ]
#    then 
#        echo "$item é um arquivo"
#        echo "`ls -l $item`"
#    else
#        echo "Não é nada"
#    fi
#done
#
#
#__________________________________Exercício 9
#
#
#
#
#
#if [ -d $1 ]
#then
#    echo "O $1 tem `ls $1 | wc -l` arquivos"
#else
#    echo "O argumento $1 não é um diretório"
#fi
#
#
#
#_________________________________Exercício 10
#
#
#dia=$(date +%F)
#
#for FILE in `ls *.png`
#do
#    mv $FILE ${dia}-${FILE}
#done
#
#
#
#________________________________Exercício 11
#
#
#diretorio=$1
#extensao=$2
# 
#dia=$(date +%F)
#
#cd $diretorio
#
#for FILE in `ls *.$extensao`
#do
#    echo "Renomeando $FILE para ${dia}-{$FILE}"
#    mv $FILE ${dia}-${FILE}
#done
#
#
#
#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>
#include <stdlib.h>
#include <sys/stat.h>

int main(){
	FILE *fPointer1;
	FILE *fPointer2;
	char buff[21];
	char ch;

	fPointer1 = fopen("lseek.txt", "r");
	fPointer2 = fopen("output.txt", "w");

	while((ch = fgetc(fPointer1)) != EOF)
	{
		read(fPointer1, buff, 1);
		write(fPointer2, buff, 1);
		lseek(fPointer1, 5, SEEK_CUR);
	}

	fclose(fPointer1);
	fclose(fPointer2);

	return 0; 
}

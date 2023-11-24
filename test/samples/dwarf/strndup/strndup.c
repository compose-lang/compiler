#include "ansidecl.h"
#include <stddef.h>

extern size_t strlen (const char*);
extern void* malloc (size_t);
extern void* memcpy (void*, const void*, size_t);
char * strndup (const char *s, size_t n) {
    char *result;
    size_t len = strlen (s);
    if (n < len)
        len = n;
    result = (char *) malloc (len + 1);
    if (!result)
        return 0;
    result[len] = '\0';
    return (char *) memcpy (result, s, len);
}

import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

export function filterResponse<T>() {
    return pipe (
        filter ((event: HttpEvent<T>) => event.type === HttpEventType.Response), // verifica tipo de Response
        map ((response: HttpResponse<T>) => response.body)   // retorna apenas o corpo
    );
}

export function uploadProgress<T>(callback: (progress: number) => void) {
    return tap ((event: HttpEvent<T>) => {
        if (event.type === HttpEventType.UploadProgress) {
            const progress = Math.round ((event.loaded * 100) / event.total);
            callback (progress);
        }
    });
}
export class ProjectHelper {

  /**
   * Устанавливаем заголовок при монтировании компонента
   * 
   * @param {string} title - строка, которая будет тайтлом.
  */
  static async setDocumentTitle(title = 'title') {
    document.title = title;
  }

}
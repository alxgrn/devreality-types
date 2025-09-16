
// Пользовательский аккаунт
export type TUser = {
    Id: number;
    Email: string;
    Password: string | null;
    IsRoot: boolean;
    CreatedDate: string;
    RestoreCode: string;
};
// Пользовательская сессия
export type TSession = {
    token: string;
    user: TUser;
    //profile: TProfile;
};
// Изображение
export type TImage = {
    Id: number;
    Uploaded: string;
    FileName: string;
    OriginUrl: string;
    S3Prefix: string;
};
// Статья
export type TArticle = {
    Id: number;
    ShortContent: string | null;
    Content: string;
    CreatedDate: string;
    SystemTags: number[] | null;
    Title: string;
    ShortUrl: string;
    Status: number;
    PublishedDate: string | null;
    SEOMeta_Description: string | null;
    SEOMeta_Title: string | null;
    UpdatedDate: string;
};
// Статья в ответе на запрос отдельной статьи
export type TArticleResponse = TArticle & {
    WideCover: string;
    SectionShortUrl: string | null;
};

// Статья в ответе на запрос списка статей
export type TArticleItemResponse = {
    Id: number;
    Title: string;
    Status: number;
    ShortUrl: string;
    UpdatedDate: string;
    PublishedDate: string | null;
    WideCover: string;
    VertCover: string | null;
    SectionShortUrl: string | null;
};
// Изображения для превью статей
export type TPreviewArticleImage = {
    Id: number;
    ImageId: number | null; // => TImage.Id
    CDNUrl: string;
    ArticleId: number; // => TArticleId
};
// Вид привязки изображений к различным объектам
export const enum EArticleImageRelationType {
	None = 0,
	ArticleContent = 1,
	ArticlePreview = 2,
	ArticlePreviewForHorizontalCard = 3,
	ArticleSlider = 4,
	ArticleConferenceSlider = 5,
	Advert = 6,
	AdvertMobile = 7,
}
// Привязка изображений к различным объектам
export type TImagesRelation = {
    Id: number;
    ImageId: number;
    RelationType: number;
    AdvertId: number | null;
    ArticleId: number | null;
    ArticleImageRelationType: EArticleImageRelationType | null;
    ProjectId: number | null;
    ProjectImageRelationType: number | null;
};
// Раздел
export type TSection = {
    Id: number;
    Order: number | null;
    Title: string;
    ShortUrl: string;
    Status: number; // 0|1 - опубликовано или нет
    PublishedDate: string | null;
    Type: number;
};

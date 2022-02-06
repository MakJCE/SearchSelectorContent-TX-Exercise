import AxiosClient from "../../Shared/AxiosClient/AxiosClient";
const AlbumsListService = {
  getSearchigResultsList: (
    searchedAlbum,
    searchResultsList,
    setSearchResultsList
  ) => {
    AxiosClient.get(`search?term=${searchedAlbum.artist.replace(" ", "+")}`)
      .then((response) => {
        console.log(response);
        const data = response.data;
        const result =
          searchedAlbum.kind === "all"
            ? data.results
            : data.results.filter(
                (result) => result.kind === searchedAlbum.kind
              );
        setSearchResultsList({
          result,
          resultCount: result.length,
          resultLabel: data.resultCount ? "" : "No matching results found.",
        });
      })
      .catch((error) => {
        setSearchResultsList({
          ...searchResultsList,
          resultLabel: "There was a problem with the server.",
        });
      });
  },
};

export default AlbumsListService;

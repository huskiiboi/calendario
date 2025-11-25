function wishbone() {
    // vars denoted by const
    const tracklist = ['actor','this song','vodka cranberry','romeo','my world','class clown','nauseus','caramel','conell','sunset tower','eleven eleven','care']
    for (i in tracklist) { // i does NOT represent the items in the list. it represents the index
        console.log(tracklist[i])
    }
}
// comments denoted by // not #
wishbone()
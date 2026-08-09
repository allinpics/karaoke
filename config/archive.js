// config/archive.js — frozen release snapshot
// See config/sit.js for the full convention note.
//
// Any r##v##l##[a-z]? folder in EITHER repo resolves here: dev snapshots
// (karaoke_night_dev/r01v02l07/) and prod backout copies (karaoke/r01v02l07/)
// alike. One file serves them all — the snapshot's own RVL is already on the
// About Build line, so this only has to say "you are not looking at a live
// environment."
//
// Why this exists: without it a snapshot falls through to the default and
// reports SIT — confidently wrong, which is worse than blank. A bug reported
// from an archive URL should be identifiable as such from the About panel.
window.KN_CFG = {
  env: 'ARCHIVE'
};

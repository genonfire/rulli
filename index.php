<?php
  $selector_version = 2;
  $selector_hotdeal_sourceurl = "#board_read > div > div.board_main > div.board_main_view > div.source_url > a";
  $selector_fmdeal_sourceurl = "#bd_capture > div.rd_hd.clear > div.board.clear > table > tbody > tr:nth-child(1) > td > div > a";
  $selector_ppomppu_sourceurl = "body > div > div.contents > div.container > div > table:nth-child(n+10) > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(5) > div > div.sub-top-text-box > div > a";

  header('Content-type: application/json');
  $data = ['selector_version' => $selector_version, 'selector_hotdeal_sourceurl' => $selector_hotdeal_sourceurl, 'selector_fmdeal_sourceurl' => $selector_fmdeal_sourceurl, 'selector_ppomppu_sourceurl' => $selector_ppomppu_sourceurl];

  echo json_encode($data); 
?>

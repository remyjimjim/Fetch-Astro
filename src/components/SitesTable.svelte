<script lang="ts">
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    import type { Site } from '../types';
  
    export let sites: Site[];
    
    //console.log("What is sites: " + sites);
  </script>
  
  <DataTable style="width: 100%;">
    <Head>
      <Row>
        <Cell style="width: 25%;">Url</Cell>
        <Cell>Exp. Date</Cell>
        <Cell>Issue Date</Cell>
        <Cell>Issuer</Cell>
      </Row>
    </Head>
    <Body>
        <!--
      {#each sites as item (item.id)}
      <Row>
          <Cell>{item.url}</Cell>
          <Cell>{item.expirydate}</Cell>
          <Cell>{item.issuedate}</Cell>
          <Cell>{item.issuer}</Cell>
        </Row>
        -->
        {#each sites as item (item.id)}
        <Row>
            <Cell>{item.url}</Cell>
            <Cell>{item.expirydate}</Cell>
            <Cell>{item.issuedate}</Cell>
            <Cell>{item.issuer}</Cell>
        </Row>
        {/each}
    </Body>
  </DataTable>
  
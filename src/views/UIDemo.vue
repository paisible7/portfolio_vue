<script setup lang="ts">
import { ref } from 'vue'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert.vue'
import { Skeleton } from '@/components/ui/Skeleton.vue'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { AspectRatio } from '@/components/ui/AspectRatio.vue'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table.vue'
import ImageWithFallback from '@/components/figma/ImageWithFallback.vue'
import { Button } from '@/components/ui/button'

const isOpen = ref(false)
</script>

<template>
  <div class="p-8 space-y-8 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold">UI Components Demo</h1>

    <!-- Alert -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Alert</h2>
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </section>

    <!-- Skeleton -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Skeleton</h2>
      <div class="flex items-center space-x-4">
        <Skeleton class="h-12 w-12 rounded-full" />
        <div class="space-y-2">
          <Skeleton class="h-4 w-[250px]" />
          <Skeleton class="h-4 w-[200px]" />
        </div>
      </div>
    </section>

    <!-- Avatar -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Avatar</h2>
      <Avatar>
        <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </section>

    <!-- Aspect Ratio & ImageWithFallback -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Aspect Ratio & ImageWithFallback</h2>
      <div class="w-[450px]">
        <AspectRatio :ratio="16 / 9">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            class="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </section>

    <!-- Alert Dialog -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Alert Dialog</h2>
      <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>

    <!-- Collapsible -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Collapsible</h2>
      <Collapsible
        v-model:open="isOpen"
        class="w-[350px] space-y-2"
      >
        <div class="flex items-center justify-between space-x-4 px-4">
          <h4 class="text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger as-child>
            <Button variant="ghost" size="sm" class="w-9 p-0">
              <span class="sr-only">Toggle</span>
              {{ isOpen ? 'Close' : 'Open' }}
            </Button>
          </CollapsibleTrigger>
        </div>
        <div class="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent class="space-y-2">
          <div class="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/colors
          </div>
          <div class="rounded-md border px-4 py-3 font-mono text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    </section>

    <!-- Scroll Area -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Scroll Area</h2>
      <ScrollArea class="h-[200px] w-[350px] rounded-md border p-4">
        Jokester began sneaking into the castle in the middle of the night and leaving
        jokes all over the place: under the king's pillow, in his soup, even in the
        royal toilet. The king was furious, but he couldn't seem to catch the
        jokester. And then, one day, the people of the kingdom discovered that the
        jokes were actually funny, and they started laughing. And then the king
        started laughing. And then everyone was laughing.
      </ScrollArea>
    </section>

    <!-- Toggle & Toggle Group -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Toggle & Toggle Group</h2>
      <div class="flex items-center gap-4">
        <Toggle aria-label="Toggle italic">
          Italic
        </Toggle>
        <ToggleGroup type="single">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
          <ToggleGroupItem value="b">B</ToggleGroupItem>
          <ToggleGroupItem value="c">C</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </section>

    <!-- Breadcrumb -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Breadcrumb</h2>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>

    <!-- Pagination -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Pagination</h2>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" is-active>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>

    <!-- Table -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Table</h2>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead class="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell class="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell class="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  </div>
</template>

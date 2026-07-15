"use client";

import { Pagination } from "@heroui/react";
import { Fragment } from "react";

import type { PaginationMeta } from "./types";

interface EventPaginationProps {
  pagination: PaginationMeta;
  onPageChange: (page: number) => void;
}

const getPageNumbers = (currentPage: number, totalPages: number): number[] => {
  const window = 1;
  const pages = new Set<number>([1, totalPages]);

  for (
    let page = currentPage - window;
    page <= currentPage + window;
    page += 1
  ) {
    if (page > 0 && page <= totalPages) pages.add(page);
  }

  return Array.from(pages).sort((a, b) => a - b);
};

const EventPagination = ({
  pagination,
  onPageChange,
}: EventPaginationProps) => {
  const { currentPage, totalPages, hasNextPage, hasPrevPage, total, limit } =
    pagination;
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  const rangeStart = total === 0 ? 0 : (currentPage - 1) * limit + 1;
  const rangeEnd = Math.min(currentPage * limit, total);

  return (
    <Pagination>
      <Pagination.Summary>
        Showing {rangeStart}-{rangeEnd} of {total} events
      </Pagination.Summary>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous
            isDisabled={!hasPrevPage}
            onPress={() => onPageChange(currentPage - 1)}
          >
            <Pagination.PreviousIcon />
            <span>Previous</span>
          </Pagination.Previous>
        </Pagination.Item>

        {pageNumbers.map((page, index) => {
          const previousPage = pageNumbers[index - 1];
          const showEllipsisBefore =
            previousPage !== undefined && page - previousPage > 1;

          return (
            <Fragment key={page}>
              {showEllipsisBefore && (
                <Pagination.Item>
                  <Pagination.Ellipsis />
                </Pagination.Item>
              )}
              <Pagination.Item>
                <Pagination.Link
                  isActive={page === currentPage}
                  onPress={() => onPageChange(page)}
                >
                  {page}
                </Pagination.Link>
              </Pagination.Item>
            </Fragment>
          );
        })}

        <Pagination.Item>
          <Pagination.Next
            isDisabled={!hasNextPage}
            onPress={() => onPageChange(currentPage + 1)}
          >
            <span>Next</span>
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  );
};

export default EventPagination;
